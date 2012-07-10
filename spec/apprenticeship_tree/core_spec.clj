(ns apprenticeship_tree.core-spec
  (:use
    [speclj.core]
    [joodo.spec-helpers.controller]
    [apprenticeship_tree.core]))

(describe "apprenticeship_tree"

  (with-mock-rendering)
  (with-routes app-handler)

  (it "handles home page"
    (let [result (do-get "/")]
      (should= 200 (:status result))
      (should= "index" @rendered-template)))
  )

(run-specs)
