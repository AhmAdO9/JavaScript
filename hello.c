#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *ptr;
    int i=2;
    ptr = &i;
    printf("%d", ptr);
    return 0;
}