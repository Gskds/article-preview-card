

- how can I make the share icon circular I tried this 
```css
.share-icon {
    position: relative;
    z-index: 10;
    clip-path: circle(50%);
    width: 15px;
    height: 13px;
    overflow: hidden;
}

.share-icon {
    position: relative;
    z-index: 10;
    border-radius: 100%;
    width: 15px;
    height: 13px;
    overflow: hidden;
}
```
but it didn't work.

- I make the overflow property hidden on the card to make the image border round but this makes the social links card half hidden when I tried to position it, since it's positioned relative to the card. what should I do? How can I solve this conflict?
This is the code
```css

@media screen and (min-width: 60em) {
    .social-links {
       border-radius: 10px;
       left: 600px;
       bottom: 80px;
       width: 250px;
    }
}
```