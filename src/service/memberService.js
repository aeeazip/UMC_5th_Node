import { BaseError } from "../../config/error.js";
import { status } from "../../config/responseStatus.js";
import { signupResponseDTO } from "../dto/memberResDto.js";
import {
  addMember,
  getMember,
  getMemberPreferToMemberID,
  setPrefer,
} from "../dao/memberDao.js";

export const joinUser = async (body) => {
  const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
  const prefer = body.prefer;

  const joinUserData = await addMember({
    email: body.email,
    name: body.name,
    gender: body.gender,
    birth: birth,
    addr: body.addr,
    specAddr: body.specAddr,
    phone: body.phone,
  });

  if (joinUserData == -1) {
    throw new BaseError(status.EMAIL_ALREADY_EXIST);
  } else {
    for (let i = 0; i < prefer.length; i++) {
      await setPrefer(joinUserData, prefer[i]);
    }
    return signupResponseDTO(
      await getMember(joinUserData),
      await getMemberPreferToMemberID(joinUserData)
    );
  }
};
