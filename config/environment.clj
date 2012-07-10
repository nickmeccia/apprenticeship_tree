(use 'joodo.env)

(def environment {
  :joodo.core.namespace "apprenticeship_tree.core"
  ; environment settings go here
  })

(swap! *env* merge environment)