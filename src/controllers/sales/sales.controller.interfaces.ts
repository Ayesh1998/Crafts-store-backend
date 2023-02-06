import { CraftInterface } from "../crafts/craft.controller.interfaces";
import mongoose from "mongoose";

export interface SalesInterface {
    prodID: string | undefined;
    month: number;
    year: number;
    date: number;
    userId: string;
  }

  export interface SalesReqInterface {
    userId:string;
    crafts: CraftInterface[];
  }
