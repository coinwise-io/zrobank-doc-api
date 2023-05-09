# Idempotence

Idempotence is a fundamental concept in our API, as it ensures that the same request can be made multiple times without causing unwanted side effects, maintaining data consistency.

When making a request to our API, it is automatically forwarded to Kafka, a distributed messaging system that allows us to work with real-time data and ensure its integrity. This way, we can ensure that each request is treated independently and with total security, without causing side effects or inconsistencies in the data.
