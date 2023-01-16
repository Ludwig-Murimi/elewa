import { FirestoreCreateRegistrar, RestRegistrar } from "@ngfi/functions";

import { AddChannelCounter } from "@app/functions/add-channel-counter";

import { ConvLearnFunction } from "../../../conv-learn-func.class";


const handler = new AddChannelCounter();

/**
 * @Description : When an end user sends a message to the chatbot from a thirdparty application, this function is triggered, 
 *      handles the message and forwards it to whatsapp
 * 
 * This function listens to the 'messages' collection and forwards the message if the direction is '"toEndUser"'
 * 
 * @see https://developers.facebook.com/docs/whatsapp/cloud-api/guides/set-up-webhooks
 * 
 */
export const addChannelCounter = new ConvLearnFunction('addChannelCounter', 
                                                  new RestRegistrar(), 
                                                  [], 
                                                  handler)
                               .build();