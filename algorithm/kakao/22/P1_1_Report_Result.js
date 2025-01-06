function solution(id_list, report, k) {
    const reportPairs = Array.from(new Set(report)).map(r => r.split(' '))

    reported = {};

    for (const [reporter, reportedPerson] of reportPairs) {
        if (!reported[reportedPerson]) {
            reported[reportedPerson] = new Set();
        }
        reported[reportedPerson].add(reporter);
    }

    const emailCount = {};
    for (const [reportedPerson, reporters] of Object.entries(reported)) {
        if (reporters.size >= k) {
            for (const reporter of reporters) {
                emailCount[reporter] = (emailCount[reporter] || 0) + 1;
            }
        }
    }

    return id_list.map(user => emailCount[user] || 0)
}