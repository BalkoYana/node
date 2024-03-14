const express = require('express');
const router = express.Router();

const controller = require('../controllers/apartments.controller');
const middleware = require('../middlewares/apartments.middleware');

router.route('/')
    .get(controller.getApartments)
    .post(middleware.apartmentCreateValidation, controller.createApartment);

router.route('/:apartmentId')
    .get(middleware.apartmentByIdValidation, controller.getApartment)
    .put(middleware.apartmentByIdValidation, middleware.apartmentUpdateValidation, controller.updateApartment)
    .patch(middleware.apartmentByIdValidation, middleware.apartmentUpdateValidation, controller.updateApartment)
    .delete(middleware.apartmentByIdValidation, controller.deleteApartment);

module.exports = router;