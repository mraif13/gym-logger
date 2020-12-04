"use strict";

const appendContent = (x, label = "Home") => {
  for (let i = 0; i < 1; i++)
    $(x).append(`<div class="card">
            <section class="card-title">Monday</section>

            <section class="card-supporting-text">
                <img class="mbc-logos" src="/assets/img/logos/chest.png" />
                <h4 class="desc">Chest Day</h4>
            </section>

            <section class="card-actions">
                
            </section>
        </div>

        <!-- tue -->
        <div class="card">
            <section class="card-title">Tuesday</section>

            <section class="card-supporting-text">
                <img class="mbc-logos" src="/assets/img/logos/arm.png" />
                <h4 class="desc">Arm Day</h4>
            </section>
            <section class="card-actions">     
            </section>
        </div>

                    <!-- wed -->
        <div class="card">
            <section class="card-title">Wednesday</section>

            <section class="card-supporting-text">
                <img class="mbc-logos" src="/assets/img/logos/leg.png" />
                <h4 class="desc">Leg Day</h4>
            </section>
            </div>

                                <!-- thur -->
        <div class="card">
            <section class="card-title">Thursday</section>

            <section class="card-supporting-text">
                <img class="mbc-logos" src="/assets/img/logos/back.png" />
                <h4 class="desc">Back Day</h4>
            </section>
            </div>

                                            <!-- fri -->
        <div class="card">
            <section class="card-title">Friday</section>

            <section class="card-supporting-text">
             
                 <img id="img" class="mbc-logos" src="/assets/img/logos/shoulders.png"/>
                <h4 class="desc">Shoulders, traps, forearms</h4>
            </section>
            </div>


        
        <!-- MBC 2 --->
        <div class="card">
            <section class="card-title"> Credits </section>

            <section class="card-supporting-text2">
<p class="gudmorning">v2.1 <br/>
Created by mraif13</p>
            </section>

        </div>`);
};

// To save the timeout in order to stop it from popping up after another destination is clicked
var loadingDestination;

const loadCards = (z, xy) => {
  let destinationName;
  if (z) destinationName = $(z).find(".bottom-navigation-label").text();
  else
    destinationName = $(
      ".bottom-navigation-destination.active .bottom-navigation-label"
    ).text();

  // Create a progress bar
  let y = $("main").html(`<div class="progress">
                            <div class="indeterminate"></div>
                        </div>`);

  // Clear timeout if already running
  if (loadingDestination) window.clearTimeout(loadingDestination);

  // Simulate loading
  loadingDestination = setTimeout(function () {
    let x = $(`<article class="smart-grid"></article>`);
    $(y).html(x);
    let previousPadding = $(x).css("padding-top");
    $(x).css({ opacity: 0, paddingTop: "30px" });
    appendContent(x, destinationName);
    $(x).animate({ opacity: 1, paddingTop: previousPadding }, 375);
    loadingDestination = null;
  }, 1300);
};

window.onload = loadCards();
