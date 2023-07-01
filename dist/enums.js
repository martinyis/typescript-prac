var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
const user = {
    color: 0 /* enumColor.RED */,
    role: EnumRoles.ADMIN,
};
export {};
//# sourceMappingURL=enums.js.map