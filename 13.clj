(ns aoc21
  (:require [clojure.string :as str]))

(let [txt (slurp "13.sample.txt")
      [coords, folds] (map #(str/split % #"\n")
                           (str/split txt #"\n\n"))
      points (set coords)]
  (reduce (fn [points])))