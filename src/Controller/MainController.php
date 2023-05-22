<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Goods;
use Symfony\Component\HttpFoundation\Request;
class MainController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/', name: 'homepage')]
    public function homepage(): Response
    {
        $goods = $this->entityManager->getRepository(Goods::class)->findAll();

        return $this->render('shop/main_page.html.twig', [
            'goods' => $goods,
        ]);
    }

    #[Route('/goodsPage/{id}', name: 'goodsPage')]
    public function goodsPage($id): Response
    {
        $goods = $this->entityManager->getRepository(Goods::class)->find($id);

        $goodsBD = $this->entityManager->getRepository(Goods::class)->findBy([], ['id' => 'DESC'], 6);;

        return $this->render('shop/goods_page.html.twig', [
            'goods' => $goods,
            'goodsBD' => $goodsBD,
        ]);
    }
    #[Route('/list', name: 'goodsList')]
    public function goodsList(Request $request): Response
    {
        $sortOption = $request->query->get('sort', 'default');
        $minPrice = $request->query->get('min-price');
        $maxPrice = $request->query->get('max-price');

        $repository = $this->entityManager->getRepository(Goods::class);
        $queryBuilder = $repository->createQueryBuilder('g');

        // Додайте фільтри для мінімальної та максимальної ціни
        if ($minPrice && $maxPrice) {
            $queryBuilder->andWhere('g.price >= :minPrice')
                ->andWhere('g.price <= :maxPrice')
                ->setParameter('minPrice', $minPrice)
                ->setParameter('maxPrice', $maxPrice);
        } elseif ($minPrice) {
            $queryBuilder->andWhere('g.price >= :minPrice')
                ->setParameter('minPrice', $minPrice);
        } elseif ($maxPrice) {
            $queryBuilder->andWhere('g.price <= :maxPrice')
                ->setParameter('maxPrice', $maxPrice);
        }

        // Отримуємо товари з бази даних з врахуванням сортування
        if ($sortOption === 'price-asc') {
            $queryBuilder->orderBy('g.price', 'ASC');
        } elseif ($sortOption === 'price-desc') {
            $queryBuilder->orderBy('g.price', 'DESC');
        }

        $goods = $queryBuilder->getQuery()->getResult();

        return $this->render('shop/goods_list.html.twig', [
            'goods' => $goods,
        ]);
    }
}


