import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generate conversion from Conversion ID

| GET    | /otc/conversions/{id}/quotations|
| --------- | ----------- |

Enter the conversion's ID below and execute to get its related quotation.

### Parameters

| Parameter | Type  Description |
| --- | --- |--- |
| nonce:small_orange_diamond:  | string |  The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier. |
:small_orange_diamond: *Required parameters to request*

### Request <a href="https://api-dev159sw.zrobank.biz:2083/api/#/" class="try-btn">Try it!</a>

<Tabs>
<TabItem value="js" label="NodeJS">


```js title=Axios
const axios = require('axios');
const id = 10
const url = `https://api-dev159sw.zrobank.biz:2083/otc/conversions/${id}/quotations`;
const headers = {
  'accept': 'application/json',
  'nonce': '1'
};

axios.get(url, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro na solicitação:', error.message);
  });
```
</TabItem>
<TabItem value="py" label="Python">


```python title=Requests
import requests
id = 10
url = 'https://api-dev159sw.zrobank.biz:2083/otc/conversions/{id}/quotations'
headers = {
    'accept': 'application/json',
    'nonce': '1'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    response_data = response.json()
    print(response_data)
else:
    print('Erro na solicitação. Código de status:', response.status_code)
```
</TabItem>
<TabItem value="shell" label="Shell">

```shell title=CURL
  curl -X 'GET' \
      'https://api-dev159sw.zrobank.biz:2083/otc/conversions/10/quotations' \
      -H 'accept: application/json' \
      -H 'nonce: 1'
```
</TabItem>
<TabItem value="php" label="PHP">


```shell title=CURL
<?php

$url = 'https://api-dev159sw.zrobank.biz:2083/otc/conversions/10/quotations';

$headers = array(
    'accept: application/json',
    'nonce: 1'
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if ($response !== false) {
    $response_data = json_decode($response, true);
    print_r($response_data);
} else {
    echo 'Erro na solicitação. Erro: ' . curl_error($ch);
}

curl_close($ch);
```
</TabItem>
</Tabs>

### Responses

<Tabs>
<TabItem value="200" label="200">

```json  title=/otc/conversions/{id}/quotations
{
  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "price_buy": 0,
  "price_sell": 0,
  "side": "buy",
  "quote_amount_buy": 0,
  "quote_amount_sell": 0,
  "quote_currency_symbol": "BRL",
  "quote_currency_decimal": 2,
  "quote_currency_title": "Real",
  "base_amount_buy": 0,
  "base_amount_sell": 0,
  "base_currency_symbol": "BTC",
  "base_currency_decimal": 8,
  "base_currency_title": "Real",
  "created_at": "2023-05-08T14:10:01.404Z"
}
```
</TabItem>
<TabItem value="400" label="400">

```json  title=/otc/conversions/{id}/quotations
{
    "message": "exemple."
}
```
</TabItem>
<TabItem value="403" label="403">

```html  title=/otc/conversions/{id}/quotations
{
  <!DOCTYPE html>
  <!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
  <!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
  <!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
  <!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
  <head>
  <title>Attention Required! | Cloudflare</title>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/cf.errors.css" />
  <!--[if lt IE 9]><link rel="stylesheet" id='cf_styles-ie-css' href="/cdn-cgi/styles/cf.errors.ie.css" /><![endif]-->
  <style>body{margin:0;padding:0}</style>
  <!--[if gte IE 10]><!-->
  <script>
    if (!navigator.cookieEnabled) {
      window.addEventListener('DOMContentLoaded', function () {
        var cookieEl = document.getElementById('cookie-alert');
        cookieEl.style.display = 'block';
      })
    }
  </script>
  <!--<![endif]-->
  </head>
  <body>
    <div id="cf-wrapper">
      <div class="cf-alert cf-alert-error cf-cookie-error" id="cookie-alert" data-translate="enable_cookies">Please enable cookies.</div>
      <div id="cf-error-details" class="cf-error-details-wrapper">
        <div class="cf-wrapper cf-header cf-error-overview">
          <h1 data-translate="block_headline">Sorry, you have been blocked</h1>
          <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> zrobank.biz</h2>
        </div><!-- /.header -->
        <div class="cf-section cf-highlight">
          <div class="cf-wrapper">
            <div class="cf-screenshot-container cf-screenshot-full">
              
                <span class="cf-no-screenshot error"></span>
              
            </div>
          </div>
        </div><!-- /.captcha-container -->
        <div class="cf-section cf-wrapper">
          <div class="cf-columns two">
            <div class="cf-column">
              <h2 data-translate="blocked_why_headline">Why have I been blocked?</h2>
              <p data-translate="blocked_why_detail">This website is using a security service to protect itself from online attacks. The action you just performed triggered the security solution. There are several actions that could trigger this block including submitting a certain word or phrase, a SQL command or malformed data.</p>
            </div>
            <div class="cf-column">
              <h2 data-translate="blocked_resolve_headline">What can I do to resolve this?</h2>
              <p data-translate="blocked_resolve_detail">You can email the site owner to let them know you were blocked. Please include what you were doing when this page came up and the Cloudflare Ray ID found at the bottom of this page.</p>
            </div>
          </div>
        </div><!-- /.section -->
        <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
    <p class="text-13">
      <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7c4398d49fb31ccb</strong></span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
      <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
        Your IP:
        <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
        <span class="hidden" id="cf-footer-ip">189.3.37.34</span>
        <span class="cf-footer-separator sm:hidden">&bull;</span>
      </span>
      <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing" id="brand_link" target="_blank">Cloudflare</a></span>
      
    </p>
    <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
  </div><!-- /.error-footer -->
      </div><!-- /#cf-error-details -->
    </div><!-- /#cf-wrapper -->
    <script>
    window._cf_translation = {};
    
    
  </script>
  </body>
  </html>
}
```
</TabItem>
</Tabs>
