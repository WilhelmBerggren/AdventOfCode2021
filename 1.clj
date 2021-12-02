(ns aoc21-01
  (:require [clojure.string :as str]))

(def mem (map #(Integer/parseInt %) (str/split-lines (slurp "1.txt"))))

(defn pt1 [col] (count (filter true? (map #(apply < %) (partition 2 1 col)))))

(defn pt2 [col] (pt1 (map #(apply + %) (partition 3 1 col))))

(print "part 1:" (pt1 mem)
       "part 2:" (pt2 mem))

