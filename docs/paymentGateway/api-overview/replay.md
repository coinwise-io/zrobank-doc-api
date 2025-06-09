import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replay Protection

This functionality allows clients to choose the rule that applies to them so that a request is considered as repeated.
For this purpose, a new optional parameter was created: `x-include-replay-protection-schema`. This parameter is only used in the header of cashout endpoints, that is, when sending PIX and P2P transfers.
<br />

## Protection types

  - If the user does not choose any of the rules, **the payload blocking** rule will be used by default;
  - If the user chooses a rule via header, then that rule will be applied to that cashout request;

### Payload blocking (no value on x-include-replay-protection-schema parameter)

  - If the user repeats the payload, regardless of whether or not they changed  nonce and transaction UUID values, new requests will be blocked for 2 hours;
  - If the user does not repeat the payload, regardless of whether or not the nonce and transaction UUID values has been changed, new requests won't be blocked;

### Nonce blocking (`nonce` value on x-include-replay-protection-schema parameter)

  - If the user repeats the nonce and payload in the request, it will be blocked for 2 hours;
  - If the user changes the nonce and/or payload, it won't be blocked;

### Transaction UUID blocking (`x-transaction-uuid` value on x-include-replay-protection-schema parameter)

  - If the user repeats the transaction UUID and payload in the request, it will be blocked for 2 hours;
  - If the user changes the transaction UUID and/or payload, it won't be blocked;

### Nonce & Transaction UUID blocking (`nonce&x-transaction-uuid` value on x-include-replay-protection-schema parameter)

  - If the user repeats the transaction uuid, nonce and payload, it will be blocked for 2 hours;
  - If the user changes the transaction uuid and/or nonce and/or payload, it won't be blocked;


:::note
This new header type is optional. If not defined, the **payload blocking** will be considered.
:::

<Tabs>
<TabItem value="payload-blocking" label="Payload blocking">

```curl title="Payload blocking"
x-include-replay-protection-schema=
```

</TabItem>
<TabItem value="nonce-blocking" label="Nonce blocking">

```curl title="Nonce blocking"
x-include-replay-protection-schema=nonce
```

</TabItem>
<TabItem value="transaction-uuid-blocking" label="Transaction UUID blocking">

```curl title="Transaction UUID blocking"
x-include-replay-protection-schema=x-transaction-uuid
```

</TabItem>
<TabItem value="nonce-transaction-uuid-blocking" label="Nonce & Transaction UUID blocking">

```curl title="Nonce & Transaction UUID blocking"
x-include-replay-protection-schema=nonce&x-transaction-uuid
```

</TabItem>
</Tabs>
