import "dotenv/config";
import * as SibApiV3Sdk from "@sendinblue/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("I entered");
  const body = await request.json();
  try {
    const { email, name, mobile, gender, postcode,homeNumber } = body;
    const urlString = request.url;
    const parsedUrl = new URL(urlString);
    const baseUrl = `${parsedUrl.protocol}//${parsedUrl.host}/`;

    let apiInstance = new SibApiV3Sdk.ContactsApi();
    apiInstance.setApiKey(
      SibApiV3Sdk.ContactsApiApiKeys.apiKey,
      process.env.NEXT_PUBLIC_API_KEY as string
    );
    let createContact = new SibApiV3Sdk.CreateContact();

    createContact.email = email;
    createContact.attributes = {
      FIRSTNAME: name,
      EMAIL: email,
      MOBILE: mobile,
      GENDER: gender == 'dhr' ? 'Male' : 'Female',
      ZIPCODE: postcode,
      DOMAIN: baseUrl,
      HOME_NUMBER : homeNumber
      // SMS : '+923343911185'
    };
    createContact.listIds = [7];

    const res_cont = await apiInstance.createContact(createContact).then(
      function (data: any) {
        console.log("Success");
      },
      function (error: any) {
        console.error("ERROR", error);
      }
    );

    return NextResponse.json({ Success: "true" });
  } catch {
    console.log("error");
  }
}
