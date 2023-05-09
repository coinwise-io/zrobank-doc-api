# Conversion Endpoints

## /v2/otc/conversions

To create a new currency conversion, first, you need to create a **Quotation ID** at the endpoint `/v2/quotations/spot`. After the `quotation_id` is created, enter its information in the requisition body below and execute it.

**HTTP Method:** POST.

### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| nonce  | string | yes | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier. |

### Requisition Body

```json
{
  "quotation_id": "abb8e578-6540-4104-8fa9-90a854ab0d1c"
}
```

### Responses

| Status Code | Description | Response |
| --- | --- | --- |
| 200 | Conversion created. | `{ "id": "f6e2e084-29b9-4935-a059-5473b13033aa"\n  "operation_id": "295564a9-c5fd-4e73-9abb-72e0383f2dfb",\n "created_at": "2023-05-08T14:10:01.430Z"}` |
| 400 | If any required params are missing or has invalid format or type. | None|
| 401 | User authentication failed. | None |
| 422 | If any required params are missing or has invalid format or type. | None |

## /v3/otc/conversions

Get a list of user's conversions. You can include any of the filter parameters below to refine your search.

**HTTP Method:** GET.

### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| nonce  | string | yes | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier. |
| page | number| no | Page number.|
|  size  |   number | no | Page size. Max size is 100.       |
|  sort   |  string | no | Page sort attribute.      |
|  order    | string | no | Page order.      |
|  operation_id    |  string | no |Operation ID for conversion.       |
|  currency_symbol |   string | no |Currency Symbol for conversion.       |
|  quotation_id   |  string | no |Quotation ID for conversion.       |
|  conversion_type |  string | no |Conversion type.       |
|  created_at_start | string | no |Created at start for any conversion.       |
|  created_at_end  |  string | no |Created at end for any conversion.      |

### Requisition Body

```curl
{
  curl -X 'GET' \
  'https://api-dev159sw.zrobank.biz:2083/v3/otc/conversions?page=1&size=20&sort=created_at&order=asc&operation_id=10&quotation_id=1&conversion_type=buy' \
  -H 'accept: application/json' \
  -H 'nonce: v2'
}
```

### Responses

* Status Code: 403
  * Description: Error: response status is 403.
  * Response:

```html
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
      <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7c432f92bffa2596</strong></span>
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

* Status Code: 200
  * Description: The conversions returned successfully.
  * Response:

```json
{
  "page": 1,
  "page_size": 20,
  "page_total": 20,
  "total": 100,
  "data": [
    {
      "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
      "operation_id": "f6e2e084-29b9-4935-a059-5473b13033aa",
      "quotation_id": "f6e2e084-29b9-4935-a059-5473b13033aa",
      "price": 0,
      "side": "buy",
      "quote_amount": 0,
      "quote_currency_symbol": "BRL",
      "quote_currency_decimal": 2,
      "quote_currency_title": "Real",
      "base_amount": 0,
      "base_currency_symbol": "BTC",
      "base_currency_decimal": 8,
      "base_currency_title": "Real",
      "created_at": "2023-05-08T14:10:01.441Z"
    }
  ]
}
```

* Status Code: 400
  * Description: If any required params are missing or has invalid format or type.

* Status Code: 401
  * Description: User authentication failed.

* Status Code: 422
  * Description: If any required params are missing or has invalid format or type.

## /v2/otc/conversions/credit-balance

Get user's liability (the sum in BRL of all negative balances of all active currencies) and credit balance.

**HTTP Method:** GET.

### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| nonce  | string | yes | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier. |

### Requisition Body

```curl
{
  curl -X 'GET' \
    'https://api-dev159sw.zrobank.biz:2083/v2/otc/conversions/credit-balance' \
    -H 'accept: application/json' \
    -H 'nonce: qui1876209'
}
```

### Responses

* Status Code: 403
  * Description: Error: response status is 403.
  * Response:

```html
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
              <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7c4384d85910a5e6</strong></span>
              <span class="cf-footer-separator sm:hidden">&bull;</span>
              <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
                Your IP:
                <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
                <span class="hidden" id="cf-footer-ip">177.36.14.114</span>
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

* Status Code: 200
  * Description: Conversion credit success.
  * Response:

```json
{
  "liability": -1000,
  "credit_balance": 10000
}
```

* Status Code: 400
  * Description: If any required params are missing or has invalid format or type.

* Status Code: 401
  * Description: User authentication failed.

* Status Code: 422
  * Description: If any required params are missing or has invalid format or type.

## /otc/conversions/{id}/quotations

Enter the conversion's ID below and execute to get its related quotation.

**HTTP Method:** GET.

### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| nonce  | string | yes | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier. |

### Requisition Body

```curl
{
  curl -X 'GET' \
      'https://api-dev159sw.zrobank.biz:2083/otc/conversions/10/quotations' \
      -H 'accept: application/json' \
      -H 'nonce: 1'
}
```

### Responses

* Status Code: 403
  * Description: Error: response status is 403
  * Response:

```html
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

* Status Code: 200
  * Description: Quotation returned successfully.
  * Response:

```json
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
  
* Status Code: 400
  * Description: If any required params are missing or has invalid format or type.

## /otc/conversions/{id}

Enter the conversion's ID below and execute to get all its information.

**HTTP Method:** GET.

### Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| nonce  | string | yes | The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier. |
| id  | string | yes | Conversion UUID. |

### Requisition Body

```curl
{
  curl -X 'GET' \
  'https://api-dev159sw.zrobank.biz:2083/otc/conversions/2' \
  -H 'accept: application/json' \
  -H 'nonce: 1'
}
```

### Responses

* Status Code: 403
  * Description: Error: response status is 403
  * Response:

```html
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
          <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold">7c43b0c74d191b2e</strong></span>
          <span class="cf-footer-separator sm:hidden">&bull;</span>
          <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
            Your IP:
            <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
            <span class="hidden" id="cf-footer-ip">177.36.14.114</span>
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

* Status Code: 200
  * Description: Conversion returned successfully.
  * Response:

```json
{
  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "operation_id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "quotation_id": "f6e2e084-29b9-4935-a059-5473b13033aa",
  "price": 0,
  "side": "buy",
  "quote_amount": 0,
  "quote_currency_symbol": "BRL",
  "quote_currency_decimal": 2,
  "quote_currency_title": "Real",
  "base_amount": 0,
  "base_currency_symbol": "BTC",
  "base_currency_decimal": 8,
  "base_currency_title": "Real",
  "created_at": "2023-05-08T14:10:01.403Z"
}
```

* Status Code: 400
  * Description: If any required params are missing or has invalid format or type.
