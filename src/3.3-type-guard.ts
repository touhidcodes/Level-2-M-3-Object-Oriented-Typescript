{
  //  Type Guard

  //  typeof operator
  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  //  in guard operator
  //  property in type / interface object

  type LocalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: LocalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`Admin user ${user.name}`);
    } else {
      console.log(`Local user ${user.name}`);
    }
  };
  //
}
