
import { usersApi as service } from "./usersApi";


export  const authApi = {
  login: async (payload) => {
    const users = await service.get();
    const user = users.find(
      (item) =>
        item.email === payload.email && item.password === payload.password,
    );

    if (!user) {
      throw new Error(`User with email ${payload.email} not exist.`);
    }


    const {password, ...safeUser} = user;
    return safeUser;
  },

  register: async (payload) => {
    const users = await service.get();
    const isUserExist = users.find((item) => item.email === payload.email);

    if (isUserExist) {
      throw new Error(`User with email ${payload.email} already exist.`);
    }

    const user = await service.post(payload);
    const {password, ...safeUser} = user;
    return safeUser;
  },
};