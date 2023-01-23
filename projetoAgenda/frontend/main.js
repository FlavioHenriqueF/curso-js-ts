import "core-js/stable";
import "regenerator-runtime/runtime";

import Contato from "./modules/Contato";
import Login from "./modules/login";

const register = new Login(".form-register");
const login = new Login(".form-login");
login.init();
register.init();

const contato = new Contato(".form-contato");
contato.init();
