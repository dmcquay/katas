## Intent

For a Workday integration, I need to read org/team data from Workday. It seems that the Report as a Service API or the SOAP APIs are the best way to do this.

I'm having trouble getting access to the Workday SOAP API right now, so first I'd just like to create some little test SOAP API so that can try consuming it and brush up on SOAP generally.

But hopefully I'll get access soon and can use this as a playground for hitting the Workday SOAP API too.

## Resources

- https://www.npmjs.com/package/soap
  - client & server
  - 173k weekly downloads
  - Last publish: 2 months ago
  - Pulse is a bit more active than strong-soap
  - Types available
  - When I created a server using strong-soap and then tried to consume it with soap, I couldn't get it to work.
  - Async/Await is supported, but requires suffix everywhere
- https://www.npmjs.com/package/strong-soap
  - client & server
  - 23k weekly downloads
  - Last publish: 1 day ago
  - No Types provided
  - Async works better
