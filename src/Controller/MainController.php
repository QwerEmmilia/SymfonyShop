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
        // Отримання всіх товарів з бази даних
        $goods = $this->entityManager->getRepository(Goods::class)->findAll();

        // Передача отриманих даних у шаблон

        // Створення нового товару
        $goods1 = new Goods();
        $goods1->setName('Худі Husll under oversize');
        $goods1->setDescription('Теж норм');
        $goods1->setPrice(80.99);
        $goods1->setRating(1);
        $goods1->setSizes(1);
        $goods1->setImage('https://husll.com.ua/image/cache/catalog/products/PKY0537/86-800x1024.jpg');

        $goods2 = new Goods();
        $goods2->setName('Худі Husll girl & logo oversize');
        $goods2->setDescription('Норм худі');
        $goods2->setPrice(99.99);
        $goods2->setRating(1);
        $goods2->setSizes(1);
        $goods2->setImage('https://husll.com.ua/image/cache/catalog/products/PKY0537/86-800x1024.jpg');

//        $this->entityManager->persist($goods1);
//        $this->entityManager->persist($goods2);
//        $this->entityManager->flush();

        return $this->render('shop/main_page.html.twig', [
            'goods' => $goods,
        ]);
    }
}
