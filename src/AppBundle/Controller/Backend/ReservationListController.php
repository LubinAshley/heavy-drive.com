<?php
/**
 * Created by PhpStorm.
 * User: ashley
 * Date: 27/03/18
 * Time: 16:36
 */

namespace AppBundle\Controller\Backend;


use Sonata\AdminBundle\Controller\CRUDController;

class ReservationListController extends CRUDController
{
    public function listAction()
    {

        return parent::listAction(); // TODO: Change the autogenerated stub

        //return $this->render("backend\car\list_reservation_created.html.twig");

    }

}