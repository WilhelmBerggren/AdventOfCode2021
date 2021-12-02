(ns aoc21-02
  (:require [clojure.string :as str]))

(def lines (let [lines (str/split-lines (slurp "2.txt"))
               items (map #(str/split % #"\s") lines)
               parsed (map #(list (first %) (Integer/parseInt (second %))) items)]
           parsed))

(def sample (list
             ["forward" 5]
             ["down" 5]
             ["forward" 8]
             ["up" 3]
             ["down" 8]
             ["forward" 2]))

(let [{:keys [x y aim]}
      (reduce
       (fn [{:keys [x y aim] :as acc} [dir n]]
         (merge acc
                (condp = dir
                  "up" {:aim (- aim n)}
                  "down" {:aim (+ aim n)}
                  {:x (+ x n) :y (+ y (* aim n))})))
       {:x 0 :y 0 :aim 0} lines)]
  {:part1 (* x aim) :part2 (* x y)})
