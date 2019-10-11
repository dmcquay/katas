https://medium.com/@saisandeepmopuri/system-design-rate-limiter-and-data-modelling-9304b0d18250

Design rate limiter — A rate limiter is a tool that monitors the number of requests per a window time a service agrees to allow. If the request count exceeds the number agreed by the service owner and the user (in a decided window time), the rate limiter blocks all the excess calls (say by throwing exceptions). The user can be a human or any other service (ex: in a micro service based architecture).
Example: A device with a specific ip address can only make 10 ticket bookings per minute to a show booking website. Or a service A can hit service B with a rate of at most 500 req/sec. All the excess requests get rejected.

My plan:
Make a dummy api that just returns hello world.
Limit all calls to 5 per 10 seconds, regardless of IP or any means of identifying the caller.
