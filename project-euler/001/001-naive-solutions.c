#include <stdio.h>

/**
 *
 */

int main(void) {
  int multiples = [1000];
  int finalSum;

  for (int i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      multiples[i] = i;
    }
  }

  printf("%d", finalSum);

  return 0;
}
