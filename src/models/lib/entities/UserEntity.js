import { Validator } from "../../../helpers";

export default class UserEntity {

  constructor(user ={}) {
    this.name           = user.name || "";
    this.last_name      = user.last_name || "";
    this.cell_phone     = user.cell_phone || "";
    this.email          = user.email  || "";
    this.leg            = user.leg || "";
    this.sex            = user.sex || "";
    this.birthday       = user.birthday;
    this.username       = user.username || "";
    this.password       = user.password || "";
    this.role           = user.role || "";
    this.cep            = user.cep || "";
    this.origin_state   = user.origin_state || "";
    this.origin_city    = user.origin_city || "";
    this.origin_country = user.origin_country || "";
    this.guardian_name  = user.guardian_name || "";
    this.guardian_phone = user.guardian_phone || "";
    this.findUs         = user.findUs || "";
    this.height         = user.height || "";
    this.weight         = user.weight || "";
    this.team           = user.team || "";
    this.position_1     = user.position_1 || "";
    this.position_2     = user.position_2 || "";
    this.position_3     = user.position_3 || "";
    this.user_id        = user.user_id || "";
    this.active         = user.active || "";
    this.validator      = new Validator();
  }

  validateUser() {
    const errors = {};
    const validate = {};
    const response = {
      err: false,
      errors: {}
    };
    
    errors.name        = this.validator.validate(this.name, "string", 1);
    errors.last_name   = this.validator.validate(this.last_name, "string", 1);
    errors.cell_phone  = this.validator.validate(this.cell_phone, "string", 8);
    errors.email       = this.validator.validate(this.email, "email");
    errors.leg         = this.validator.validate(this.leg, "string", 1);
    errors.username    = this.validator.validate(this.username, "string", 3);
    errors.sex         = this.validator.validate(this.sex, "string", 1);
    errors.role        = this.validator.validate(this.role, "string", 1);

    const arrays = Object.keys(errors);

    arrays.map(i => {
      if(errors[i].err) {
        response.err = true;
        response.errors[i] = errors[i].errors;
      }
    });
    return response;
  }
}