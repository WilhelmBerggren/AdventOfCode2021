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

(defn calc [col]
  (reduce
   (fn [{:keys [x y aim]} [dir n]]
     {:x (if (= dir "forward") (+ x n) x)
      :y (if (= dir "forward") (+ y (* aim n)) y)
      :aim (condp = dir "up" (- aim n) "down" (+ aim n) aim)})
   {:x 0 :y 0 :aim 0} col))

(let [{:keys [x y aim]} (calc lines)]
  {:part1 (* x aim) :part2 (* x y)})
