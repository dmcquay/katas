#include <check.h>
#include "../src/change.h"

#define EXIT_SUCCESS 0
#define EXIT_FAILURE 1

START_TEST(test_change) {
    struct coins c = getChange(25);
    ck_assert_int_eq(c.quarters, 1);
}
END_TEST

static Suite *change_suite(void) {
    Suite *s;
    TCase *tc_core;

    s = suite_create("Change");

    tc_core = tcase_create("Core");

    tcase_add_test(tc_core, test_change);

    suite_add_tcase(s, tc_core);

    return s;
}

int main(void) {
    int number_failed;
    
    Suite *s;
    SRunner *sr;

    s = change_suite();
    sr = srunner_create(s);

    srunner_run_all(sr, CK_NORMAL);
    number_failed = srunner_ntests_failed(sr);
    srunner_free(sr);

    return (number_failed == 0) ? EXIT_SUCCESS : EXIT_FAILURE;
}