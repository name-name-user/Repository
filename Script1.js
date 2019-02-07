< !DOCTYPE html >
    <html>
        <body>

            <p>Click the button to demonstrate the prompt box.</p>

            <button onclick="myfunction()">Click the button, then enter your name.</button>

            <script>
                function myFunction() {
  var str = prompt("Please enter your name", "Billy Bob");
                              var i;
                              //var person = ["Billy Bob"]
                                     
                            var textName = "";
                                     
for (i = str.length - 1; i > -1; i--) {
                    textName += str[i];
                }
              document.write(textName);
              }

</script>

        </body>
    </html>