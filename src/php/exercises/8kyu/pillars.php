// * https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/php

<?php
function pillars($numberOfPillars, $dist, $width): int
{
    if ($numberOfPillars <= 1) {
        return 0;
    }
    return ($numberOfPillars - 1) * $dist*100 + ($numberOfPillars - 2) * $width;
}


echo pillars(1, 10, 10);
