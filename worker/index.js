/**
 * Required Environment Valiables
 * - HANDLER_FUNCTION_NAME
 */
const AWS = require('aws-sdk')
const lambda = new AWS.Lambda()

exports.handler = async (event, context) => {
  await Promise.all(
    event.Records.map(async (record) => {
      try {
        if (record.eventSource != 'aws:kinesis') return
        const json = Buffer.from(record.kinesis.data, 'base64').toString()
        return await lambda
          .invoke({
            FunctionName: process.env.HANDLER_FUNCTION_NAME,
            InvocationType: 'Event',
            Payload: json,
          })
          .promise()
      } catch (err) {
        console.error(err)
        return err
      }
    })
  )
}
