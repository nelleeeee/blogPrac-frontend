import React from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "@apollo/client";
import { CONFIRM_SECRET, LOCAL_LOG_IN } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const email = useInput("");
  const secret = useInput("");
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    },
  });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (secret !== "") {
      try {
        const {
          data: { confirmSecret: token },
        } = await confirmSecretMutation();
        if (token !== "" && token !== undefined) {
          localLogInMutation({ variables: { token } });
        } else {
          throw Error();
        }
      } catch {
        toast.error("Cant confirm secret,check again");
      }
    }
  };

  return <AuthPresenter email={email} secret={secret} onSubmit={onSubmit} />;
};
