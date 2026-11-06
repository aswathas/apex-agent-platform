async function testSearch() {
  try {
    const res = await fetch('https://html.duckduckgo.com/html/?q=best+running+shoes+under+5000+inr', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const html = await res.text();
    const regex = /<a class="result__url"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<a class="result__snippet"[^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    let count = 0;
    while ((match = regex.exec(html)) !== null && count < 3) {
      console.log('Result', ++count, ':');
      console.log('URL:', match[1].trim());
      console.log('Snippet:', match[3].replace(/<[^>]+>/g, '').trim());
    }
    console.log('Total matches found:', count);
  } catch (err) {
    console.error(err);
  }
}
testSearch();
