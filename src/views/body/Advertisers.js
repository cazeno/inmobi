import React from 'react'

export default class Advertisers extends React.Component{

  render(){
      return (
        <div id='advertiser'>
          <Main />
          <Engagement />
          <Aquire />
          <Remarket />
          <Mtap />
        </div>
      )
  }
}

function Main(props){
  return (
    <div id="main">
    <div className="container">
      <div className="row">
        <div className="span6">
          <h2><span>Mobile Marketing</span>
            <br />at scale</h2>
          <p>Reach over 1.5 billon mobile users across 32000 premium mobile properties. Leverage every mobile moment to engage users and maximize mobile
            revenues.
          </p>
          <div className="row-fluid webhide_med">
            <div className="span4 center toppad">
              <p><a href="#brandengagement" className="btn btn-clear-small scrollToPos">brand engagement</a></p>
            </div>
            <div className="span4 center toppad">
              <p><a href="#useracquisition" className="btn btn-clear-small scrollToPos">user acquisition</a></p>
            </div>
            <div className="span4 toppad">
              <p><a href="#remarketing" className="btn btn-clear-small scrollToPos">remarketing</a></p>
            </div>
          </div>
        </div>
        <div className="span6 b156">
          <img src="/img/t1_156u.png" />
        </div>
      </div>
      <div className="row-fluid webhide_big">
        <div className="span3 center offset1">
            <p><a href="#brandengagement" className="btn btn-clear-small scrollToPos">brand engagement</a></p>
        </div>
        <div className="span3 center">
            <p><a href="#useracquisition" className="btn btn-clear-small scrollToPos">user acquisition</a></p>
        </div>
        <div className="span3 center">
            <p><a href="#remarketing" className="btn btn-clear-small scrollToPos">remarketing</a></p>
        </div>
      </div>
    </div>
  </div>
  )
}

function Engagement(props){
  return (
    <div id="engagement" className="scrollNext">
      <a name="brandengagement" id="brandengagement"></a>
      <div className="container">
        <div className="row-fluid">
          <div className="span7 mobhide">

            <div className="row-fluid">
              <div className="span6 ">
                <div className="phone dark">
                  <video width="100%" height="90%" controls="" preload="auto" loop="" poster="/img/sunsilk_mock.png" className="videoclick">
                    <source src="/ui/static/sunsilk_mock.mp4" type="video/mp4" />
                    <source src="/ui/static/sunsilk_mock.webm" type="video/webm" />
                  </video>

                </div>
              </div>
              <div className="span6 ">
                <div className="phone dark">
                  <video width="100%" height="90%" controls="" preload="auto" loop="" poster="/img/Brand_Screen_Native.png" className="videoclick">
                    <source src="/ui/static/brand_screen_native.mp4" type="video/mp4" />
                  </video>

                </div>
              </div>
            </div>

          </div>
          <div className="span5">
            <h2>Drive Brand <br /><span>Engagement</span> </h2>

            <p>Brands have complex goals when it comes to mobile. While large-scale awareness is important, real user engagement is key for a better LTV. InMobi makes brand engagement at scale possible with advanced mobile data sciences. </p>
            <p className="button"><a href="/advertisers/brand-engagement/" className="btn btn-clear dark">Learn more</a></p>
          </div>
          <div className="span7 webhide mobshow">

            <div className="row-fluid">
              <div className="span12 ">
                <div className="phone dark">
                  <video width="100%" height="90%" controls="" preload="auto" loop="" poster="/img/sunsilk_mock.png" className="videoclick">
                    <source src="/ui/static/sunsilk_mock.mp4" type="video/mp4" />
                    <source src="/ui/static/sunsilk_mock.webm" type="video/webm" />
                  </video>

                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
    </div>
  )
}

function Aquire(props){
  return (
    <div id="acquire">
      <a name="useracquisition" id="useracquisition"></a>
      <div className="container">
        <div className="row-fluid">
          <div className="span5">
            <h2>Acquire and <br /><span>Activate Users</span>  </h2>

            <p>Acquire quality users efficiently. Leverage powerful data signals to drive precise targeting. Nudge users
              to discover your apps, products and services using dynamic and contextualized creatives. Optimize campaigns based on lifetime value signals and
              post-install events. Nudge users across their
              journey towards their first purchase.   </p>
            <p className="button"><a href="/advertisers/user-acquisition/" className="btn btn-clear">Learn more</a></p>
          </div>
          <div className="span7">

            <div className="row-fluid">
              <div className="span6 ">
                <div className="phone ">
                  <video width="100%" height="90%" controls="" preload="auto" loop="" poster="/img/beat_the_heat_still.png" className="videoclick">
                    <source src="/ui/static/beat_the_heat.mp4" type="video/mp4" />
                    <source src="/ui/static/beat_the_heat.webm" type="video/webm" />
                  </video>
                </div>
              </div>
              <div className="span6 mobhide">
                <div className="phone ">
                  <video width="100%" height="90%" controls="" preload="auto" loop="" poster="/img/moveez.png" className="videoclick">
                    <source src="/ui/static/moveez.mp4" type="video/mp4" />
                    <source src="/ui/static/moveez.webm" type="video/webm" />
                  </video>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

function Remarket(props){
  return (
    <div id="remarket" className="">
    <a name="remarketing" id="remarketing"></a>
    <div className="container">
      <div className="row-fluid">
        <div className="span7 mobhide">

          <div className="row-fluid">
            <div className="span6 ">
              <div className="phone dark">
                <img src="/img/commerce_native_story_still.png" className="screen clickpointer" />
                <img className="phoneScreen hide phonegif" src="/img/commerce_native_story.gif" />

              </div>
            </div>
            <div className="span6 ">
              <div className="phone dark">
                <img src="/img/kiloo_still.png" className="screen clickpointer" />
                <img className="phoneScreen hide phonegif" src="/img/kiloo.gif" />

              </div>
            </div>
          </div>

        </div>
        <div className="span5">
          <h2><span>Remarket</span> to existing users</h2>

          <p>Converting a newly acquired customer into a high value shopper through remarketing is both an art and a science. By engaging with mobile users across different stages of the lifecycle based on  persona, context and product affinity, we help you cross-sell, re-target &amp; re-activate users with personalized recommendations.</p>
          <p className="button"><a href="/advertisers/remarketing/" className="btn btn-clear dark">Learn more</a></p>
        </div>
        <div className="span7 webhide mobshow">

          <div className="row-fluid">
            <div className="span12 ">
              <div className="phone dark">
                <img src="/img/kiloo_still.png" className="screen clickpointer" />
                <img className="phoneScreen hide phonegif" src="/img/kiloo.gif" />

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
  )
}

function Mtap(props){
  return (
    <div id="mtap" className="">
    <div className="container">
      <div className="row-fluid">
        <div className="span6">

          <h2>Extensive Support for <br /><span>Tracking &amp; Attribution</span></h2>

          <p>Work with our Mobile Tracking &amp; Attribution Partners (MTAPs) to access advanced targeting and benefit from secure, independent and accurate attribution for your performance campaigns. Seamless integration with MTAPs gives you more control and transparency over data sharing for LTV optimization.</p>
          <p className="button"><a href="/advertisers/user-acquisition/mtap/" className="btn btn-clear ">Learn more</a></p>
        </div>
        <div className="span6 mtapImg">

          <img className="phoneScreen" src="/img/t5_mtap.png" />

        </div>


      </div>
    </div>
  </div>
  )
}
