;; (ns aoc21-01
;;   (:require [clojure.string :as str]))

(def answers [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1])
(def board1 '([22 13 17 11  0]
              [ 8  2 23  4 24]
              [21  9 14 16  7]
              [ 6 10  3 18  5]
              [ 1 12 20 15 19]))

(defn column [n] (mapv #(nth % n) board1))

(column 1)

(defn mark [n]
  (mapv
   (fn [row]
     (mapv (fn [col]
             (when (not= col n) col)) row)) board1))

(mark 7)