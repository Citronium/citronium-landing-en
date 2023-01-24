# «LLK Portal» for Lukoil oil company

One of the biggest oil companies in Russia, Lukoil, asked to improve their application for oil and bitumen loading pre-registration.

<figure>
    <img src="{{ site.baseurl }}/assets/img/projects/lukoil/lukoil-1-overview.png" alt="LLK Portal: overview image"/>
</figure>

## Tasks

1. Prevent the confidential information interception.
2. Speed up the application.
3. Improve the page refreshment.

## Solution

To protect data from being intercepted, we have implemented usage of the secure HTTPS protocol. In case of an HTTPS access error, the app switches to the HTTP protocol. (In the previous version of the application, only HTTP was used).

To speed up the application, we’ve added file caching. As a result, the loading of the screen takes two or three seconds. Before the improvement, the loading was much slower - 30-40 seconds.

We’ve added a pull-to-refresh feature for updating the screen content. Our designers improved the navigation in the application.

## Result

We’ve implemented the following features:

1. Two ways to log in: Pin-code or Touch ID by fingerprint.
2. Loading registration:

    * select products from the list;
    * choose the place of shipping;
    * choose a date in the calendar;
    * choose the shipping time;
    * confirm the registration.

3. Order history access: date, ordered goods and the order status,the order number, the driver info.

Thus, the application has become more convenient to use, functional and, most importantly, safe in terms of information security.