<?php

namespace App\Controller;

use App\Entity\Good;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GoodsController extends AbstractController
{
    /**
     * @Route("/load-more-goods", name="load_more_goods")
     */
    public function loadMoreGoods(Request $request)
    {
        $start = $request->query->get('start', 0); // Get the "start" parameter from the request
        $count = $request->query->get('count', 8); // Get the "count" parameter from the request

        $entityManager = $this->getDoctrine()->getManager();
        $goods = $entityManager->getRepository(Good::class)
            ->findBy([], null, $count, $start); // Retrieve additional blocks of goods from the database (e.g., all goods with sorting and limiting)

        $response = [];

        foreach ($goods as $good) {
            $response[] = [
                'image' => $good->getImage(),
                'name' => $good->getName(),
                'rating' => $good->getRating(),
                'price' => $good->getPrice(),
            ];
        }

        return new JsonResponse($response); // Return the response in JSON format
    }
}

