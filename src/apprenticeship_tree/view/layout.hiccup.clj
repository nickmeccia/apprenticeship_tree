(doctype :html5)
[:html
 [:head
  [:meta {:http-equiv "Content-Type" :content "text/html" :charset "iso-8859-1"}]
  [:title "apprenticeship_tree"]
  (include-css "/stylesheets/reset.css")
  (include-css "/stylesheets/apprenticeship_tree.css")
  (include-js "/javascript/jquery.js")
	(include-js "/javascript/carousel.js")
  (include-js "/javascript/apprenticeship_tree.js")
]
 [:body
  (eval (:template-body joodo.views/*view-context*))
]]