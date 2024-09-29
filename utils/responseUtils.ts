import { Response } from "express";

const responseUtils = {
  ok: (res: Response, data: any) => {
    return res.status(200).send({
      success: true,
      data,
      status: 200,
      message: "ok"
    });
  },

  notFound: (res: Response) => {
    return res.status(404).send({
      success: false,
      status: 404,
      message: "Cannot find resouces",
    });
  },

  error: (res: Response, message: string) => {
    return res.status(500).send({
      success: false,
      status: 500,
      message: message || "Internal server error",
    });
  },

  unauthorized: (res: Response, message: string) => {
    return res.status(401).send({
      success: false,
      status: 401,
      message: message || 'Unauthorized',
    });
  },

  invalidated: (res: Response, errors: any) => {
    return res.status(422).send({
      success: false,
      status: 422,
      data: errors
    })
  }
};

export default responseUtils
