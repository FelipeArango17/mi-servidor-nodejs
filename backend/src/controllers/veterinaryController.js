// Controller
const register = (req, res) => {
    const { email, password } = req.body;
    res.json({ msg: 'Desde API/veterinarios'});
};

const login = (req, res) => {
    const { email, password } = req.body;
    res.json({ msg: 'Desde API/veterinarios/login'});
};

const profile = (req, res) => {
    res.json({ msg: 'Desde API/veterinarios/profile' });
};

export {
    register,
    login,
    profile
};