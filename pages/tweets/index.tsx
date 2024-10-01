import { api } from "@/lib/api/api-client";
import { Button } from "@nextui-org/button";
import React from "react";

const index = () => {
  return (
    <div>
      Tweet一覧
      <Button
        onClick={async () => {
          await api.get("api/v1/tweets");
        }}
      >
        authenticate_userとcurrent_api_v1_userのチェック
      </Button>
      <Button
        onClick={async () => {
          await api.delete("api/v1/users/sign_out");
        }}
      >
        ログアウト
      </Button>
    </div>
  );
};

export default index;
