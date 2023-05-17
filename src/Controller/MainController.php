<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Goods;

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

//
}



