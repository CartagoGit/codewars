//* https://www.codewars.com/kata/5262119038c0985a5b00029f/train/php

<?php

function is_prime(int $n): bool
{
    if ($n <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($n); $i++) {
        if ($n % $i === 0) {
            return false;
        }
    }
    return true;
}
