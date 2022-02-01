-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT
	UCASE(first_name) AS first_name,
	UCASE(last_name) AS last_name
FROM hr.employees;
