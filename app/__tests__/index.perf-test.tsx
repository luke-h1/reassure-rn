import React from "react";
import { measureRenders } from "reassure";
import Index from "../index";

test("Index screen performance", async () => {
  await measureRenders(<Index />);
});
