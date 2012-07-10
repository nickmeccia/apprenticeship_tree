(ns apprenticeship_tree.core
  (:use
    [compojure.core :only (defroutes GET)]
    [compojure.route :only (not-found)]
    [joodo.middleware.view-context :only (wrap-view-context)]
    [joodo.views :only (render-template render-html)]
    [joodo.controllers :only (controller-router)]))

(defroutes apprenticeship_tree-routes
  (GET "/" [] (render-template "index"))
  (controller-router 'apprenticeship_tree.controller)
  (not-found (render-template "not_found" :template-root "apprenticeship_tree/view" :ns `apprenticeship_tree.view.view-helpers)))

(def app-handler
  (->
    apprenticeship_tree-routes
    (wrap-view-context :template-root "apprenticeship_tree/view" :ns `apprenticeship_tree.view.view-helpers)))

