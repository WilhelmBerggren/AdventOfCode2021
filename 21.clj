(ns aoc-21)




(let [dice (cycle (inc (range 101)))]
  (take 3 [1 2 3 4]))








;; (loop [dice 1
;;        p1 4
;;        s1 0
;;        turn 0]
;;   (prn p1 s1)
;;   (if (> s1 1000)
;;     [p1 s1 turn]
;;     (recur (drop 6 dice)
;;            (apply + (take 3 dice))
;;            (+ s1 (mod p1 10))
;;            (inc turn))))
