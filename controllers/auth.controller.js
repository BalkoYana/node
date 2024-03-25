const apartmentService = require('../services/apartments.service');
const authService = require('../services/auth.service');



const signin = async (req, res, next) => {
    try {
        const { owner } = req.body;

        const user = await apartmentService.findOne({ owner });

        const accessToken = await authService.signAccessToken(user);

        res.cookie("access_token", accessToken, { httpOnly: true })
            .status(201)
            .json({
                status: 201,
                data: { accessToken },
            });
    } catch (err) {
        next(err);
    }
};
const signout = async (req, res, next) => {
    try {
        res.clearCookie("access_token")
            .status(200)
            .json({
                status: 200,
            });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    signin,
    signout,
};