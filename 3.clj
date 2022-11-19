(ns aoc21-01
  (:require [clojure.string :as str]))

(def lines (str/split-lines (slurp "3.txt")))

(def sample ["00100"
             "11110"
             "10110"
             "10111"
             "10101"
             "01111"
             "00111"
             "11100"
             "10000"
             "11001"
             "00010"
             "01010"])

(defn vecLines [col] 
  (for [s col]
    (mapv #(Integer/parseInt (str %)) s)))

;; (map-indexed (fn [i s] (nth s 0)) sam)

(defn part1 [col]
  (let [sam (for [s col] (mapv #(Integer/parseInt (str %)) s))
        xlen (count (first sam))
        ylen (count sam)
        transposed (partition
                    ylen
                    (for [i (range xlen)
                          s sam]
                      (nth s i)))
        freqs (map #(frequencies %) transposed)
        sorted (map #(sort-by val %) freqs)
        gamma (Integer/parseInt (apply str (map #(first (second %)) sorted)) 2)
        epsilon (Integer/parseInt (apply str (map #(first (first %)) sorted)) 2)]
    (* gamma epsilon)))

(part1 lines)

;; (defn part2 [col]
;;   )

;; (part2 sample)