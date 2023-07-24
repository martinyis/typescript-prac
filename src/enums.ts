enum EnumRoles {
  ADMIN,
  GUEST,
  USER,
}
const enum enumColor {
  RED,
  GREEN,
  BLUE,
}

interface IUser {
  role: EnumRoles;
  color: enumColor;
}

const user: IUser = {
  color: enumColor.RED,
  role: EnumRoles.ADMIN,
};
