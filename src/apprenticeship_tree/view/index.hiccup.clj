[:nav
	[:img {:src "./images/logo.png"}]
	[:dl
		[:li [:h1 "patriarchs"]]
		[:li [:a.micah {:href "#"} "micah martin"]]
		[:li [:a.cory {:href "#"} "cory foy"]]
		[:li [:a.doug {:href "#"} "doug bradbury"]]
		[:li [:a.billy {:href "#"} "billy whited"]]
		[:li [:a.eric {:href "#"} "eric smith"]]
		[:li [:a.jim {:href "#"} "jim suchy"]]
		[:li [:a.craig {:href "#"} "craig demyanovich"]]]]

[:div#slideshow
	[:ul.slides
  (render-partial "slide_1")
  (render-partial "slide_2")
  (render-partial "slide_3")
  (render-partial "slide_4")
  (render-partial "slide_5")
  (render-partial "slide_6")
  (render-partial "slide_7")]]